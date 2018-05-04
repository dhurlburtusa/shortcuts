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


[gettext]: https://www.gnu.org/software/gettext/
