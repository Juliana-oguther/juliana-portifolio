@echo off
echo.
echo  ========================================
echo   Juliana Portfolio — Fresh Build + Dev
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
echo  [2/3] Gerando build de producao...
node_modules\.bin\next.cmd build
if %errorlevel% neq 0 (
    echo.
    echo  ERRO: Build falhou. Corrija os erros acima e tente novamente.
    pause
    exit /b 1
)

echo.
echo  [3/3] Iniciando servidor de desenvolvimento...
echo  Acesse: http://localhost:3000
echo.

node_modules\.bin\next.cmd dev
