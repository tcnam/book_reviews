lib_install:
	yarn install
doc_local:
	yarn build
	yarn start
doc_remote_mac:
	git add .
	git commit -m "update doc"
	git push origin source
	USE_SSH=true yarn deploy
doc_remote_win:
	git add .
	git commit -m "update doc"
	git push origin source
	$env:USE_SSH = "true"; yarn deploy