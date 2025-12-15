install:
	npm ci
brain-games:
	node bin/brain-game.js
publish:
	npm publish --dry-run