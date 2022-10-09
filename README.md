# MeowcorpSMP Generation 2
[https://meowcorp.net/smp](https://meowcorp.net/smp/)

private server modpack

## Development
```
.
├── common
│   ├s─ config -> ../packwiz/config
│   ├s─ mods -> ../packwiz/mods
│   └s─ resourcepacks -> ../packwiz/resourcepacks
└── packwiz
    ├── config
    ├── mods
    └── resourcepacks
```
Because packwiz doesn't support symlinks, folders are symlinked from the packwiz directory instead.

If you need to create new folders, create it in the packwiz directory and symlink it to common. To create a symlink, use these commands in the common directory (don't miss the trailing dot!!!):
| Platform | Command |
| - | - |
| Mac/Linux | `ln -s ../packwiz/fileOrFolderName .` |
| Windows File | `mklink fileName ..\packwiz\fileName` |
| Windows Folder | `mklink /D folderName ..\packwiz\folderName` |
> Note: You need administrator permissions to create symlinks in Windows.

Please run `packwiz curseforge detect` every time you add a CF mod.
