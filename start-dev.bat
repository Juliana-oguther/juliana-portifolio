@echo off
echo.
echo  ========================================
echo   Juliana Portfolio — Dev Server
echo  ========================================
echo.

echo  [1/3] Limpando cache .next...
if exist ".next" (
    rmdir /s /q ".next"
    echo  OK cache limpo.
) else (
    echo  OK nenhum cache encontrado.
)

echo.
echo  [2/3] Iniciando servidor de desenvolvimento...
echo  Acesse: http://localhost:3000
echo.

node_modules\.bin\next.cmd dev
