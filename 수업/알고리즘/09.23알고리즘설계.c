#include <stdio.h>
#include <stdlib.h>

typedef struct Node{
    int data;
    struct Node* prev;
    struct Node* next;
} Node;

void freeList(Node* head){
    Node*current = head;
    while (current != NULL){
        Node* temp = current;
        current = current-> next;
        free(temp);
    }
}

struct Node* binarySearch(Node* head, int size, int target){
    int low = 0;
    int high = size-1;
    Node* current = head;
    int currentIndex = 0;
    while (low<=high){
        int mid = (low+high)/2;
        while(currentIndex<mid){
            current = current->next;
            currentIndex++;
        }
        while(currentIndex>mid){
            current = current->next;
            currentIndex--;
        }
        if (current->data == target){
            return current;
        }
        else if (current->data<target){
            low = mid+1;
        }
        else {high = mid-1;}
    }
    return NULL;
}

void insertBack(Node** head, int data, int* size){
    Node* newNode = (Node*)malloc(sizeof(Node));
    newNode->data = data;
    newNode->prev = NULL;
    newNode->next = NULL;
    if (*head == NULL){
        *head = newNode;
    }
    else{
        Node* current = *head;
        while(current->next != NULL){
            current = current-> next;
        }
        current-> next = newNode;
        newNode->prev = current;
    }
    (*size)++;
}

int main(){
    Node* head = NULL;
    int size=0;
    int target;

    insertBack(&head, 3, &size);
    insertBack(&head, 7, &size);
    insertBack(&head, 12, &size);
    insertBack(&head, 18, &size);
    insertBack(&head, 25, &size);

    printf("Enter a number to search: ");
    scanf("%d", &target);

    Node* result = binarySearch(head, size, target);

    if (result != NULL){
        printf("Found: %d\n", result->data);
    }
    else{printf("Not found.\n");}
    freeList(head);
    return 0;
}