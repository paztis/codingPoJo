r.js -o build/app.build.js
cd ../dist
mv lib/requirejs/require.js require.js
rm -rf lib/* build src/views src/models build.txt
mkdir lib/requirejs && mv require.js lib/requirejs/require.js
mv css/style.css style.css && rm -rf css/* && mv style.css css/style.css