#!/bin/sh

set -e;

if ! git diff-files --quiet; then
    echo "Can not publish with unstaged uncommited changes";
    exit 1;
fi;

if ! git diff-index --quiet --cached HEAD; then
    echo "Can not publish with staged uncommited changes";
    exit 1;
fi;

rm -rf node_modules
npm install

npm run build;

git add dist;
git commit -m "Dist" || echo "Nothing to distribute";

VERSION=$(node -p "require('./package.json').version")

if echo "$VERSION" | grep -q "-"; then
    echo "Publishing prerelease version $VERSION with alpha tag";
    git tag "v$VERSION" || echo "Tag already exists";
    git push;
    git push --tags;
    npm publish --tag alpha;
else
    npm version patch;
    git push;
    git push --tags;
    npm publish;
fi