include .env
build:
	web-ext build --overwrite-dest
sign: 
	web-ext sign --use-submission-api --channel unlisted --api-key $(WEB_EXT_API_KEY) --api-secret $(WEB_EXT_API_SECRET)
	