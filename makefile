doc_local:
	yarn build
	yarn start
doc_remote_commit:
	git add .
	git commit -m "update doc"
	git push origin source
doc_remote:
	USE_SSH=true yarn deploy