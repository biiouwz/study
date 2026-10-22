//// 순차 탐색 구현
// #include <stdio.h>

// int linearSearch(int arr[], int size,int target);
// int count=0;
// int main(void){
//     int arr[] = {13,8,27,4,19};
//     int size = sizeof(arr)/sizeof(arr[0]);
//     int target;

//     printf("찾을 숫자 입력 : ");
//     scanf("%d", &target);

//    int result = linearSearch(arr,size, target);

//    if (result == -1){
//     printf("비교 횟수 : %d\n", count);
//     printf("%d는 배열에 없습니다.\n", target);
//    }
//    else {
//     printf("비교 횟수 : %d\n", count);
//     printf("%d는 %d번째 인덱스에서 찾았습니다.\n", target,result);
//    }
//    return 0;
// }
// int linearSearch(int arr[], int size, int target){
//     for (int i=0; i<size; i++){
//         if (arr[i] == target){
//             count+=1;
//             return i;
//         }
//         count+=1;
//     }
//     return -1;
// }

//// 연결리스트 구현
// #include <stdio.h>
// #include <stdlib.h>

// typedef struct Node{
//     int data;
//     struct Node* next;
// } Node;

// void insertBack(Node** head, int data){
//     Node* newNode = malloc(sizeof(Node));

//     newNode -> data = data;
//     newNode -> next = NULL;

//     if (*head == NULL){
//         *head = newNode;
//         return;
//     }

//     Node* current = *head;

//     while (current -> next != NULL){
//         current = current -> next;
//     }

//     current -> next = newNode;
// }

// Node* linearSearch(Node* head, int target){
//     Node* current = head;
//     while (current != NULL){
//         if (current -> data == target){
//             return current;
//         }
//         current = current -> next;
//     }
//     return NULL;
// }

// int main(void){
//     Node* head = NULL;

//     insertBack(&head, 17);
//     insertBack(&head, 8);
//     insertBack(&head, 25);
//     insertBack(&head, 31);
//     insertBack(&head, 12);
//     insertBack(&head, 40);
//     insertBack(&head, 6);

//     int target;

//     printf("찾을 숫자 입력 : ");
//     scanf("%d", &target);

//     Node* result = linearSearch(head, target);
//     if (result != NULL){
//         printf("%d를 찾았습니다.\n", target);
//     }
//     else{
//         printf("%d를 찾지 못했습니다.\n", target);
//     }

//     Node* current = head;

//     while (current != NULL){
//         Node* temp = current;
//         current = current -> next;
//         free(temp);
//     }
//     return 0;
// }