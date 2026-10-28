#include <stdio.h>

#define TABLE_SIZE 7
#define EMPTY -1
#define DELETED -2

int table[TABLE_SIZE]; // 포인터가 아닌 일반 int 배열로 변경

int hash(int key) { return key % TABLE_SIZE; }

void initTable() {
  for (int i = 0; i < TABLE_SIZE; i++) {
    table[i] = EMPTY; // NULL 대신 EMPTY(-1)로 초기화
  }
}

void insert(int key) {
  int index = hash(key);
  int count = 0;
  while (count < TABLE_SIZE) {
    if (table[index] == EMPTY || table[index] == DELETED) {
      table[index] = key;
      return;
    }
    index = (index + 1) % TABLE_SIZE;
    count++;
  }
  printf("Hash table is full.\n");
}

int search(int key) {
  int index = hash(key);
  int count = 0;
  while (count < TABLE_SIZE) {
    if (table[index] == key) {
      return index;
    }
    if (table[index] == EMPTY) {
      return -1;
    }
    index = (index + 1) % TABLE_SIZE;
    count++;
  }
  return -1;
}

void DELETE(int key) {
  int index = hash(key);
  int count = 0;
  while (count < TABLE_SIZE) {
    if (table[index] == key) {
      table[index] = DELETED;
      return;
    }
    if (table[index] == EMPTY) {
      return;
    }
    index = (index + 1) % TABLE_SIZE;
    count++;
  }
}