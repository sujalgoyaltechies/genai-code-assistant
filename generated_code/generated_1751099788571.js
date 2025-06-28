Certainly! Below is a simple "Hello, World!" program written in C:

```c
#include <stdio.h>

int main() {
    printf("Hello, World!\n");
    return 0;
}
```

### Explanation:
- `#include <stdio.h>`: This line includes the standard input-output library, which is necessary for using the `printf` function.
- `int main()`: This defines the main function where the program execution starts.
- `printf("Hello, World!\n");`: This line prints "Hello, World!" to the console. The `\n` is used to add a new line after the output.
- `return 0;`: This indicates that the program finished successfully.

### Compiling and Running the Program:
1. Save the code in a file named `hello.c`.
2. Open your terminal or command prompt.
3. Navigate to the directory where you saved the file.
4. Compile the program using a C compiler (like `gcc`):
   ```bash
   gcc hello.c -o hello
   ```
5. Run the compiled program:
   ```bash
   ./hello
   ```

You should see the output:
```
Hello, World!
```