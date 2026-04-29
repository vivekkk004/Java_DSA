import java.util.*;

public class maxSum {
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();
        int[] arr = new int[n];

        // input array
        for (int i = 0; i < n; i++) {
            arr[i] = sc.nextInt();
        }

        int maxSum = sc.nextInt();
        int result = 0;

        // total subsets = 2^n
        for (int i = 0; i < (1 << n); i++) {
            int sum = 0;

            for (int j = 0; j < n; j++) {
                if ((i & (1 << j)) != 0) {
                    sum += arr[j];
                }
            }

            if (sum <= maxSum) {
                result = Math.max(result, sum);
            }
        }

        System.out.println("Your result :"+result);
    }
}