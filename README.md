# MeowcorpSMP Generation 2
[https://meowcorp.net/smp](https://meowcorp.net/smp/)

private server modpack

## Development

### Windows users (Read before cloning!)
This repository uses symlinks. In order to use symlinks on Windows, you must enable Developer Mode

Windows 10: Settings > Update & Security > For developers > Developer Mode

Windows 11: Settings > Privacy and Security > For developers >Developer Mode

### Directory structure
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
> Note: Developer mode has to be enabled to create symlinks. See above for details.

Please run `packwiz curseforge detect` every time you add a CF mod.
