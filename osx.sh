#!/bin/bash

# Substitui "pnpm" por "yarn" nos arquivos especificados
sed -i '' 's/pnpm/yarn/g' package.json
sed -i '' 's/pnpm/yarn/g' .lintstagedrc.json
sed -i '' 's/pnpm/yarn/g' './.husky/pre-commit'
sed -i '' 's/pnpm/yarn/g' './.husky/pre-push'
sed -i '' 's/pnpm/yarn/g' Dockerfile
sed -i '' 's/pnpm/yarn/g' README.md


