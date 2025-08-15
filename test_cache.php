<?php

echo "=== DIAGNÓSTICO DE PERMISSÃO - bootstrap/cache ===\n\n";

$dir = 'C:\CRM\crm\bootstrap\cache';

// Limpa cache interno do PHP
clearstatcache(true);
clearstatcache();

echo "1. Diretório: $dir\n";

if (!file_exists($dir)) {
    echo "❌ ERRO: O diretório NÃO existe.\n";
    exit;
}

echo "✅ O diretório EXISTE.\n";

if (!is_dir($dir)) {
    echo "❌ ERRO: O caminho existe, mas NÃO é um diretório.\n";
    exit;
}

echo "✅ É um diretório.\n";

echo "2. Verificando gravabilidade...\n";
echo "   is_writable(\$dir): " . (is_writable($dir) ? '✅ SIM' : '❌ NÃO') . "\n";

echo "3. Teste de escrita...\n";
$file = $dir . '/test_write_' . time() . '.txt';
if (file_put_contents($file, "Teste de escrita em " . date('Y-m-d H:i:s') . "\n")) {
    echo "✅ Arquivo criado: $file\n";
} else {
    echo "❌ FALHA ao escrever no diretório.\n";
}

echo "4. Informações do processo:\n";
echo "   PHP SAPI: " . php_sapi_name() . "\n"; // CLI ou apache
echo "   Usuário atual: " . get_current_user() . "\n";
echo "   whoami: " . trim(@exec('whoami')) . "\n";

echo "\n✅ Teste concluído.\n";