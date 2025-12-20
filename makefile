doc_local:
	yarn build
	yarn start
doc_remote:
	yarn build
	git add .
	git commit -m "update doc"
	git push origin source
	USE_SSH=true yarn deploy