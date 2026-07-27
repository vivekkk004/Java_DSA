public class PalindromeString{
    public static void main(String[] args){

        String str = "madamhj";

       int start = 0;
       int end = str.length()-1;

       boolean Palindrome = true;

       while(start < end){
        if(str.charAt(start) != str.charAt(end)){
              Palindrome = false;
              break;
        }
        start++;
        end--;
       }
       if(Palindrome){
        System.out.println("PalindromeString ");
       }else{
        System.out.println(" not PalindromeString ");
       }
    }
}