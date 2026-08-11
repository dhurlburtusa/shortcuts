# GNU Assembler Notes

The GNU Assembler, commonly known as gas or as, is the assembler developed by the GNU Project.

See https://en.wikipedia.org/wiki/GNU_Assembler for details.

## Manual

See https://sourceware.org/binutils/docs/as/.

## Memory Operand Size Specifiers

The Intel/MASM syntax uses explicit size specifiers like `DWORD PTR [ebx]` to resolve ambiguous memory references.

**Sizes**

- BYTE (8-bit)
- WORD (16-bit)
- DWORD (32-bit)
- FWORD (48-bit)
- QWORD (64-bit)
- TBYTE (80-bit)
- OWORD (128-bit)
- XMMWORD (128-bit vector)
- YMMWORD (256-bit vector)
- ZMMWORD (512-bit vector)

See https://sourceware.org/binutils/docs/as.html#AT_0026T-Syntax-versus-Intel-Syntax.
