public class palindrome{
    public static  int reverseNum(int num){

        int reverseNum =0;
        while(num>0){
            int lastDigit =num%10;
            num = num/10;

            reverseNum = reverseNum*10 + lastDigit;
        }
        return reverseNum;
    }

    public static boolean checkPalindrome(int num){
        int reverseNum = reverseNum(num);
        if (reverseNum == num){
            return true;
        }
        else{
          return  false;
        }
    }
    public static void main(String args[]){
    boolean ans = checkPalindrome(121);
    System.out.println(ans);
    }
}