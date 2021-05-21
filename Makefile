build:
	ng build --output-path docs --base-href /ng-example/
	cp docs/index.html docs/404.html
	git add docs

test:
	ng test --no-watch --no-progress --code-coverage

