# VS Code Cheat Sheet


## Popular Shortcuts

* Show the Command Palette (`Ctrl+Shift+P`)
* Open Markdown Preview in current editor group (`Ctrl+Shift+V`)
* Open Markdown Preview in new editor group to the side (`Ctrl+K V`)
* Show the Debug view (`Ctrl+Shift+D`)


## Hiding Derived JavaScript Files

See https://code.visualstudio.com/docs/languages/typescript#_hiding-derived-javascript-files
for details.


## Settings

Here are the settings I tend to use in a project.

**.vscode/settings.json**

```json5
// Place your settings in this file to overwrite default and user settings.
{

// Editor

  // Columns at which to show vertical rulers
  "editor.rulers": [80, 120],

  // The number of spaces a tab is equal to.  This setting is overridden based on
  // the file contents when `editor.detectIndentation` is on.
  "editor.tabSize": 2,

// Files

  "files.trimTrailingWhitespace": true,

// File Explorer

  // Controls if the explorer should automatically reveal and select files when
  // opening them.
  "explorer.autoReveal": false,

  // Controls if the explorer should allow to move files and folders via drag and
  // drop.
  "explorer.enableDragAndDrop": false,

// TypeScript.

  "typescript.referencesCodeLens.enabled": true,

  // Specifies the folder path containing the tsserver and lib*.d.ts files to use.
  // "typescript.tsdk": "C:\\Users\\Me\\Desktop\\NodeJSPortable\\node_modules\\typescript\\lib",

// Integrated Terminal

  // The path of the shell that the terminal uses on Windows.  When using shells
  // shipped with Windows (cmd, PowerShell or Bash on Ubuntu), prefer
  // C:\Windows\sysnative over C:\Windows\System32 to use the 64-bit versions.
  // "terminal.integrated.shell.windows": "C:\\Users\\Me\\Downloads\\Git\\bin\\bash.exe"
  // "terminal.integrated.shell.windows": "git-bash.exe"
  "terminal.integrated.shell.windows": "powershell.exe"

}
```
