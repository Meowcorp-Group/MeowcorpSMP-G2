# MeowcorpSMP Generation 2
[https://meowcorp.net/smp](https://meowcorp.net/smp/)

private server modpack

## Credits
Thanks to Team AOF for the unification scripts. Our team is too small to create one ourselves, especially with a tight deadline.

## Development

### Notice (!!!)
Please run `./packwiz refresh` after editing files to update the packwiz index !!!

### Windows users (!!!)
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

### Adding mods
If you want to add a CurseForge or Modrinth mod, please use packwiz. Examples:
- `./packwiz curseforge install https://www.curseforge.com/minecraft/mc-mods/techreborn`
- `./packwiz curseforge install https://www.curseforge.com/minecraft/mc-mods/techreborn/files/3958646`
- `./packwiz modrinth install https://modrinth.com/mod/sodium`
- `./packwiz modrinth install https://modrinth.com/mod/sodium/version/mc1.19.2-0.4.4`

If you are manually adding a mod from CurseForge or Modrinth, please run:
- `./packwiz curseforge detect`
or
- `./packwiz modrinth detect`

If you are adding a mod not available in CurseForge or Modrinth, please make sure the mod's license allows it, and message me or create an issue to add it.
