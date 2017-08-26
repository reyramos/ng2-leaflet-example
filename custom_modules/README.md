## Add the railinc submodule

Within this directory it is needed to add submodule for share common services.

# Add directory
```sh
git submodule add [GIT_PATH] railinc
```

# If error is thrown because directory reference exist, destroy any cache directory reference from git.

```sh
git ls-files --stage railinc  //list the directory cache files
git rm -r --cached railinc    //remove all files
```

