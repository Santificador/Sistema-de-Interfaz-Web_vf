@echo off
REM 🚀 Script de inicio rápido para Quiero Mi Seguro (Windows)

echo.
echo 🚀 Iniciando Quiero Mi Seguro...
echo.

REM Verificar si Node.js está instalado
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ❌ Node.js no está instalado.
    echo    Por favor descarga Node.js desde: https://nodejs.org
    pause
    exit /b 1
)

for /f "tokens=*" %%i in ('node --version') do set NODE_VERSION=%%i
echo ✅ Node.js detectado: %NODE_VERSION%
echo.

REM Instalar dependencias
echo 📦 Instalando dependencias...
call npm install

if %ERRORLEVEL% NEQ 0 (
    echo.
    echo ❌ Error al instalar dependencias
    pause
    exit /b 1
)

echo.
echo ✅ Dependencias instaladas exitosamente
echo.

REM Iniciar servidor de desarrollo
echo 🎉 Iniciando servidor de desarrollo...
echo    Tu aplicación estará disponible en: http://localhost:3000
echo.

call npm run dev
pause
