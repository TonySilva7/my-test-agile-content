#!/bin/bash

if ! [ -x "$(command -v yarn)" ]; then
    echo "Yarn não encontrado. Instalando Yarn globalmente..."
    npm install -g yarn
else
    echo "Yarn já está instalado globalmente."
fi

if [ -f "pnpm-lock.yaml" ]; then
    echo "Removendo 'pnpm-lock.yaml'..."
    rm pnpm-lock.yaml
else
    echo "'pnpm-lock.yaml' não encontrado. Nenhuma ação necessária."
fi

if [[ "$OSTYPE" == "darwin"* ]]; then
  chmod +x osx.sh
  ./osx.sh
else
  chmod +x linux.sh
  ./linux.sh
fi

echo "Concluído!"
