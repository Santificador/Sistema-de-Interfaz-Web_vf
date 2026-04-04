#!/bin/bash

# 🚀 Script de inicio rápido para Quiero Mi Seguro
# Este script configura y ejecuta el proyecto automáticamente

echo "🚀 Iniciando Quiero Mi Seguro..."
echo ""

# Verificar si Node.js está instalado
if ! command -v node &> /dev/null; then
    echo "❌ Node.js no está instalado. Por favor instala Node.js desde https://nodejs.org"
    exit 1
fi

echo "✅ Node.js detectado: $(node --version)"
echo ""

# Instalar dependencias
echo "📦 Instalando dependencias..."
npm install

if [ $? -ne 0 ]; then
    echo "❌ Error al instalar dependencias"
    exit 1
fi

echo ""
echo "✅ Dependencias instaladas exitosamente"
echo ""

# Iniciar servidor de desarrollo
echo "🎉 Iniciando servidor de desarrollo..."
echo "   Tu aplicación estará disponible en: http://localhost:3000"
echo ""

npm run dev
