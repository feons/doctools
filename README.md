# doctools

Tools and scripts to convert Confluence wiki to CommonMark-compliant Markdown.

This is intended to be run manually, and the resulting file(s) to be committed to git after manual inspection and modifications.


## Export and Convert Confluence Wiki to Markdown
There are a series of scripts that can be run to generate a wiki export in a zipfile,
unzip it, convert to Markdown.

Exported .zip file is placed under `./wiki/wiki_export.zip`
The converted markdown files are placed under `./build/appc-open-docs`

Confluence document page IDs:
```sh
npm run wiki <username> <password> <rootpageId>

# This actually just delegates to the various scripts that do all the steps:
npm run wiki:export -u <username> -p <password> -id <rootPageId>
npm run wiki:unzip
npm run wiki:redirects
npm run wiki:convert
```

Confluence Wiki Page Ids:
```
https://wiki.appcelerator.org/display/guides2/Quick+Start: 29004729
https://wiki.appcelerator.org/display/AB4/API+Builder: 55476482
https://wiki.appcelerator.org/display/guides2/AMPLIFY+Dashboard: 43298769 
```

## Convert Exports to Markdown
The converted markdown files are placed under `./build/appc-open-docs`
```sh
npm run wiki:post-export;
```

