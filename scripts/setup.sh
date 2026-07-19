#!/bin/bash
set -euo pipefail

cd "$(dirname "$0")/.."

echo "=== Project Setup ==="
read -p "Project name: " PROJECT_NAME
read -p "Short description: " DESCRIPTION
read -p "Primary stack (e.g. java/ignition, python/fastapi): " STACK
read -p "New git remote URL (leave blank to skip): " REMOTE_URL

# Repoint git remote
if [ -n "$REMOTE_URL" ]; then
    git remote remove origin 2>/dev/null || true
    git remote add origin "$REMOTE_URL"
    echo "Remote set to: $REMOTE_URL"
fi

# Enable the repo-local git hooks.
git config core.hooksPath .githooks

# Update CLAUDE.md
sed -i "s/\[Name\]/$PROJECT_NAME/g" CLAUDE.md
sed -i "s/\[2-3 sentences.*\]/$DESCRIPTION/g" CLAUDE.md
sed -i "s/\[Language\/framework\]/$STACK/g" CLAUDE.md

# Update README
sed -i "s/\[Project Name\]/$PROJECT_NAME/g" README.md
sed -i "s/\[Short description\]/$DESCRIPTION/g" README.md

# Clean template history and start fresh
git checkout --orphan fresh
git add -A
git commit -m "init: $PROJECT_NAME from project-template"
git branch -D main 2>/dev/null || true
git branch -m main

# Push if remote was set
if [ -n "$REMOTE_URL" ]; then
    read -p "Push to remote? (y/n): " PUSH
    if [ "$PUSH" = "y" ]; then
        git push -u origin main
    fi
fi

echo ""
echo "Done. Next steps:"
echo "  1. Edit CLAUDE.md — fill in conventions and architecture summary"
echo "  2. Edit docs/backlog.md — add your user stories"
echo "  3. Add any project-specific skills to .claude/skills/ or .agents/skills/"
echo "  4. Run Claude Code or Codex"
echo "  5. Start with the start-task skill"
