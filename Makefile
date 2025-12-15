install:
	npm ci
brain-games:
	node bin/brain-game.js
publish:
	npm publish --dry-run
lint:
	npx eslint .