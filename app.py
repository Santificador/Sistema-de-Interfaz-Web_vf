"""
SeguroAutoPY - Aplicación Flask para cotización de seguros automotrices
Este es el archivo principal de la aplicación
"""

from flask import Flask, render_template, request, jsonify
from chatbot import responder_pregunta
import json

# Crear la aplicación Flask
app = Flask(__name__)

# Diccionario de precios base por tipo de seguro
PRECIOS_BASE = {
    "basico": 1500,      # Precio base para seguro básico
    "completo": 2500,    # Precio base para seguro completo
    "premium": 3500      # Precio base para seguro premium
}

# Factor de ajuste por año del vehículo (autos más nuevos cuestan más)
FACTOR_ANIO = {
    "2023": 1.3,
    "2022": 1.2,
    "2021": 1.1,
    "2020": 1.0,
    "2019": 0.95,
    "2018": 0.9,
    "2017": 0.85,
    "2016": 0.8,
    "2015": 0.75,
    "2014": 0.7,
}

# ==================== RUTAS WEB ====================

@app.route('/')
def inicio():
    """Página de inicio"""
    return render_template('index.html')

@app.route('/contacto')
def contacto():
    """Página de contacto"""
    return render_template('contacto.html')

@app.route('/faq')
def faq():
    """Página de preguntas frecuentes"""
    return render_template('faq.html')

# ==================== RUTAS API PARA COTIZACIÓN ====================

@app.route('/api/cotizar', methods=['POST'])
def cotizar():
    """
    Procesa la solicitud de cotización
    Recibe datos JSON del formulario y retorna precio estimado
    """
    try:
        # Obtener datos del formulario via JSON
        datos = request.json
        
        # Validar que todos los datos necesarios estén presentes
        campos_requeridos = ['marca', 'modelo', 'anio', 'tipo_seguro']
        for campo in campos_requeridos:
            if campo not in datos or not datos[campo]:
                return jsonify({
                    'exito': False,
                    'mensaje': f'Error: Falta el campo {campo}'
                }), 400
        
        # Extraer datos del request
        marca = datos['marca'].strip()
        modelo = datos['modelo'].strip()
        anio = datos['anio'].strip()
        tipo_seguro = datos['tipo_seguro'].strip().lower()
        
        # Validar que el tipo de seguro sea válido
        if tipo_seguro not in PRECIOS_BASE:
            return jsonify({
                'exito': False,
                'mensaje': 'Tipo de seguro inválido'
            }), 400
        
        # Obtener precio base según tipo de seguro
        precio_base = PRECIOS_BASE[tipo_seguro]
        
        # Aplicar factor de ajuste por año
        factor_anio = FACTOR_ANIO.get(anio, 0.7)
        
        # Calcular precio final
        precio_final = precio_base * factor_anio
        precio_final = round(precio_final, 2)
        
        # Retornar respuesta exitosa
        return jsonify({
            'exito': True,
            'mensaje': 'Cotización calculada exitosamente',
            'datos': {
                'marca': marca,
                'modelo': modelo,
                'anio': anio,
                'tipo_seguro': tipo_seguro.capitalize(),
                'precio_mensual': precio_final,
                'precio_anual': round(precio_final * 12, 2)
            }
        })
    
    except Exception as e:
        # Manejo de errores general
        return jsonify({
            'exito': False,
            'mensaje': f'Error al procesar cotización: {str(e)}'
        }), 500

# ==================== RUTAS API PARA CHATBOT ====================

@app.route('/api/chatbot', methods=['POST'])
def chatbot():
    """
    Procesa preguntas del usuario y responde usando el chatbot
    """
    try:
        # Obtener pregunta del usuario desde JSON
        datos = request.json
        pregunta = datos.get('pregunta', '').strip()
        
        # Validar que exista pregunta
        if not pregunta:
            return jsonify({
                'exito': False,
                'mensaje': 'Por favor ingresa una pregunta'
            }), 400
        
        # Obtener respuesta del chatbot
        respuesta = responder_pregunta(pregunta)
        
        # Retornar respuesta
        return jsonify({
            'exito': True,
            'pregunta': pregunta,
            'respuesta': respuesta
        })
    
    except Exception as e:
        return jsonify({
            'exito': False,
            'mensaje': f'Error en el chatbot: {str(e)}'
        }), 500

# ==================== MANEJO DE ERRORES ====================

@app.errorhandler(404)
def pagina_no_encontrada(error):
    """Maneja errores 404 (página no encontrada)"""
    return render_template('404.html'), 404

@app.errorhandler(500)
def error_servidor(error):
    """Maneja errores 500 (error interno del servidor)"""
    return render_template('500.html'), 500

# ==================== INICIAR APLICACIÓN ====================

if __name__ == '__main__':
    # Correr en localhost, puerto 5000, con debug activado
    app.run(
        host='0.0.0.0',      # Accesible desde cualquier IP
        port=5000,           # Puerto
        debug=True           # Modo debug (actualiza automáticamente)
    )
