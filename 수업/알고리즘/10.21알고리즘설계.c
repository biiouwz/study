#include <stdio.h>
int hash(int key) { return key % 7; }
#define TABLE_SIZE 7
#define EMPTY -1

struct Node {
  int key;
  struct Node *next;
};

struct Node *table[TABLE_SIZE];

void initTable() {
  for (int i = 0; i < TABLE_SIZE; i++) {
    table[i] = NULL;
  }
}

void insert(int key){
    int index = hash(key);
    int count = 0;
    while(count < TABLE_SIZE){
        if (table[index] == EMPTY){
            table[index] = key;
            return;
        }
        index = (index+1)%TABLE_SIZE;
        count++;
    }
    printf("Hash table is full.\n");
}

int search(int key){
    int index = hash(key);
    int count=0;
    while(count<TABLE_SIZE){
        if (table[index] == key){
            return index;
        }
        if (table[index] == EMPTY){
            return -1;
        }
        index = (index+1)%TABLE_SIZE;
        count++;
    }
    return -1;
}