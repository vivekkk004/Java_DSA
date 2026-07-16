public class RotateArray {

    public static void rotateRight(int arr[]) {
        int last = arr[arr.length - 1];   // Store last element

        for (int i = arr.length - 1; i > 0; i--) {
            arr[i] = arr[i - 1];          // Shift elements right
        }

        arr[0] = last;                    // Place last at first
    }

    public static void main(String[] args) {
        int arr[] = {34, 34, 23, 5, 89};

        rotateRight(arr);

        for (int num : arr) {
            System.out.print(num + " ");
        }
    }
}