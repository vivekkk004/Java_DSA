import java.util.*;

public class Sort {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();

        int[][] arr = new int[n][2];

        // Input
        for (int i = 0; i < n; i++) {
            arr[i][0] = sc.nextInt();
            arr[i][1] = sc.nextInt();
        }

        // Selection Sort (sort by first column)
        for (int i = 0; i < n - 1; i++) {
            int minIndex = i;

            for (int j = i + 1; j < n; j++) {
                if (arr[j][0] < arr[minIndex][0]) {
                    minIndex = j;
                }
            }

            // Swap both columns
            int temp0 = arr[i][0];
            int temp1 = arr[i][1];

            arr[i][0] = arr[minIndex][0];
            arr[i][1] = arr[minIndex][1];

            arr[minIndex][0] = temp0;
            arr[minIndex][1] = temp1;
        }

        // Output
        for (int i = 0; i < n; i++) {
            System.out.println(arr[i][0] + " " + arr[i][1]);
        }

        sc.close();
    }
}