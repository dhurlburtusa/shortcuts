# WordPress Internationalization/Localization Notes

WordPress uses the [gettext] libraries and tools for i18n.

Here is how it works in a few sentences:

* Developers wrap translatable strings in special gettext functions.
* Special tools parse the source code files and extract the translatable strings
  into POT (Portable Objects Template) files.
* In the WordPress world, POT files are often fed to GlotPress, which is a
  collaboration tool for translators.
* Translators translate the strings and the result is a PO file (POT file, but
  with translations inside).
* PO files are compiled to binary MO files, which give faster access to the
  strings at run-time.


## Useful Links

* http://ottopress.com/2012/internationalization-youre-probably-doing-it-wrong/.


## Misc

* Thou shalt not use PHP variables of any kind inside a translation functions'
  strings.  This has to do with bullet point #2 in the description.


[gettext]: https://www.gnu.org/software/gettext/
