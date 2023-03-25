cd build
git init
git add -A
git commit -m "Update"
git remote add origin https://github.com/SurFlurer/CDDA-CN-Guide
git branch --set-upstream-to=origin/gh-pages master
git push -f origin HEAD:gh-pages
pause