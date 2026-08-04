# x86 Assembly Notes

See https://en.wikipedia.org/wiki/X86_assembly_language and https://en.wikibooks.org/wiki/X86_Assembly.

## Courses

- [Learn Assembly for Beginners | x86-64 Tutorials](https://www.youtube.com/playlist?list=PL9o2C-4xGfjHl5PF-Xt-yWH2zc4wjJ3AW)
- [x86 Assembly with NASM](https://www.youtube.com/playlist?list=PL2EF13wm-hWCoj6tUBGUmrkJmH1972dBB)

## Registers

The Intel 8008 had 4 8-bit general purpose (GP) registers named **A**, **B**, **C**, **D**.

- **A**: 8-bit GP (accumulator)
- **B**: 8-bit GP (base)
- **C**: 8-bit GP (counter)
- **D**: 8-bit GP (data)

- **BP**: 8-bit (base pointer)
- **SP**: 8-bit (stack pointer)

The Intel 8086 extended the 8008's 8-bit GP registers to 16-bit. The low byte and high byte could be used separately or the whole 16 bits could be used. **A**, **B**, **C**, **D** were renamed **AL**, **BL**, **CL**, **DL** where the **L** meant lower. **AH**, **BH**, **CH**, and **DH** became the higher portion. **AX**, **BX**, **CX**, and **DX** were the full 16 bits.

- **AX**: 16-bit GP
- **BX**: 16-bit GP
- **CX**: 16-bit GP
- **DX**: 16-bit GP

- **AL**: Lower 8 bits of the AX
- **BL**: Lower 8 bits of the BX
- **CL**: Lower 8 bits of the CX
- **DL**: Lower 8 bits of the DX

- **AH**: Higher 8 bits of the AX
- **BH**: Higher 8 bits of the BX
- **CH**: Higher 8 bits of the CX
- **DH**: Higher 8 bits of the DX

- **SI**: 16-bit source index
- **DI**: 16-bit destination index
- **BP**: 16-bit base pointer
- **SP**: 16-bit stack pointer

The Intel 80386 extended the 80386's 16-bit GP registers to 32-bit. **E** stands for "extended".

- **EAX**: 32-bit GP
- **EBX**: 32-bit GP
- **ECX**: 32-bit GP
- **EDX**: 32-bit GP

- **ESI**: 32-bit source index
- **EDI**: 32-bit destination index
- **EBP**: 32-bit base pointer
- **ESP**: 32-bit stack pointer

In 2003, AMD created the 64-bit architecture. Intel followed soon after.

- **RAX**: 64-bit GP
- **RBX**: 64-bit GP
- **RCX**: 64-bit GP
- **RDX**: 64-bit GP
- **R8** - **R15**: 64-bit GP

- **RSI**: 64-bit source index
- **RDI**: 64-bit destination index
- **RBP**: 64-bit base pointer
- **RSP**: 64-bit stack pointer

There are a bunch of additional features and special registers like SIMD instructions and vector registers designed for high-throughput computation.

See [x86 Assembly/X86 Architecture](https://en.wikibooks.org/wiki/X86_Assembly/X86_Architecture) and [Register Names Explained - x86-64 General Purpose Registers (RAX, RBX, RCX, RDX, RDI, RSI)](https://www.youtube.com/watch?v=5SICv-2tMgQ) for details.

## Instructions

See https://en.wikipedia.org/wiki/List_of_x86_instructions or https://www.felixcloutier.com/x86/.

**mov**:

Moves (aka copies) some value to a register or memory. A literal value can be copied, the value of some register can be copied, the value of some memory, etc.

**add**/**sub**:

Adds/subtracts some value and saves the result in a register.

**inc**/**dec**:

Increments/decrements the value of some register.

**lea**:

Load effective address. That is, load the memory address into some register.

## Instruction Performance

See [Instruction tables: Lists of instruction latencies, throughputs and micro-operation breakdowns for Intel, AMD and VIA CPUs](https://www.agner.org/optimize/#manual_instr_tab).

## System V ABI Convention

See https://wiki.osdev.org/Calling_Conventions for details.

### Summary

**Arguments**

**RDI**, **RSI**, **RDX**, **RCX**, **R8**, **R9**, any more go on stack.

**Return Value**

**RAX**
