public class PalindromeNum{
    public static void main(String args[]){
        int n = 121;

        System.out.print(n + " is ");
        int rev =0;
        int dup =n ;

        while(n>0){
            int LD = n%10;
            rev = rev*10 +LD;
            n = n/10;
        }
        if(dup == rev){
            System.out.print("Palindrome Num");
        }else{
            System.out.print("not a Palindrome Num");
        }
    }
}