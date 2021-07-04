# IR

# Base Instruction
MOVE SOURCE DESTINATION

# Special Registers
ProgramCounter (Pointer)
BranchSelector (Bit)

# Macros
Named by the hash of the standardized contents

# Execution
Expand macros until you get something executable

# Important Macros
MACRO (BRANCH)
  MOVE INPUT.1 BRANCH_SELECTOR
  MOVE INPUT.2 PROGRAM_COUNTER
END
