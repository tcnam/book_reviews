doc_local:
	yarn build
	yarn start
doc_remote:
	git add .
	git commit -m "update doc"
	git push origin master
	USE_SSH=true yarn deploy