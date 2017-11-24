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

**.vscode/launch.json**

Debugging with Chrome Debugger Extension:

```json5
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Chrome",
      "type": "chrome",
      "request": "launch",
      "url": "http://localhost:3000",
      "webRoot": "${workspaceRoot}/src"
    }
  ]
}
```

Update `url` and `webRoot` as necessary.

**.vscode/settings.json**

```json5
// Place your settings in this file to overwrite default and user settings.
{
// Diff Editor

  // Controls if the diff editor shows changes in leading or trailing whitespace as
  // diffs.
  "diffEditor.ignoreTrimWhitespace": true,

// Editor

  // When opening a file, `editor.tabSize` and `editor.insertSpaces` will be
  // detected based on the file contents.
  "editor.detectIndentation": false,

  // Controls if the editor should allow to move selections via drag and drop.
  "editor.dragAndDrop": false,

  // Insert spaces when pressing Tab.  This setting is overriden based on the file
  // contents when `editor.detectIndentation` is on.
  "editor.insertSpaces": false,

  // Controls how the editor should render whitespace characters, possibilities are
  // 'none', 'boundary', and 'all'.  The 'boundary' option does not render single
  // spaces between words.
  "editor.renderWhitespace": "boundary",

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
  "terminal.integrated.shell.windows": "powershell.exe",

// Window

  // Controls how windows are being reopened after a restart.  Select 'none' to
  // always start with an empty workspace, 'one' to reopen the last window you
  // worked on, 'folders' to reopen all windows that had folders opened or 'all' to
  // reopen all windows of your last session.
  "window.restoreWindows": "all",

  // Controls the window title based on the active editor.  Variables are
  // substituted based on the context:
  //
  // ${activeEditorShort}: the file name (e.g. myFile.txt)
  // ${activeEditorMedium}: the path of the file relative to the workspace folder
  //   (e.g. myFolder/myFile.txt)
  // ${activeEditorLong}: the full path of the file (e.g.
  //   /Users/Development/myProject/myFolder/myFile.txt)
  // ${folderName}: name of the workspace folder the file is contained in (e.g.
  //   myFolder)
  // ${folderPath}: file path of the workspace folder the file is contained in
  //   (e.g. /Users/Development/myFolder)
  // ${rootName}: name of the workspace (e.g. myFolder or myWorkspace)
  // ${rootPath}: file path of the workspace (e.g.
  //   /Users/Development/myWorkspace)
  // ${appName}: e.g. VS Code
  // ${dirty}: a dirty indicator if the active editor is dirty
  // ${separator}: a conditional separator (" - ") that only shows when surrounded
  //   by variables with values
  "window.title": "${dirty}${activeEditorMedium}${separator}${rootName}${separator}${appName}"

}
```
