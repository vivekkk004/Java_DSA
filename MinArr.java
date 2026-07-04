public class MinArr {

    public static void main(String[] args) {
        int arr[] = {22, 34, 50, 80, 10};

        int max = arr[0];

        for (int i = 1; i < arr.length; i++) {
            if (arr[i] > max) {
                max = arr[i];
            }
        }

        System.out.println("Minimum element: " + max );
    }
}