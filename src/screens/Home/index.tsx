import { useState } from "react";
import { Alert, FlatList, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { TodoItem } from "../components/TodoItem";
import { styles } from "./style";

export function Home() {
  const [todoList, setTodoList] = useState<string[]>([]);
  const [todoItem, setTodoItem] = useState('');
  const [finishCount, setFinishCount] = useState<number>(0);
  const [addButtonFocused, setAddButtonFocused] = useState<boolean>(false);

  function handleTodoAdd() {
    if (todoList.includes(todoItem)) {
      return Alert.alert("Todo já existe", "Já existe um todo na lista com essa descrição.");
    }

    setTodoList(prevState => [...prevState, todoItem]);
    setTodoItem('');
  }

  function handleFinishCount(value: boolean) {
    setFinishCount(finishCount + (value ? 1 : -1));
  }

  function handleTodoRemove(todoDescription: string) {
    setTodoList(prevState => prevState.filter(todo => todo !== todoDescription));
  }

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../../../assets/logo.png')} />

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor="#6B6B6B"
          onChangeText={setTodoItem}
          value={todoItem}
        />

        <TouchableOpacity style={{ ...styles.button, backgroundColor: addButtonFocused ? '#4EA8DE' : '#1E6F9F' }}
          activeOpacity={1}
          onPress={handleTodoAdd}
          onPressIn={() => setAddButtonFocused(true)}
          onPressOut={() => setAddButtonFocused(false)}>
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.formStatus}>
        <View style={styles.statusView}>
          <Text style={styles.textCreatedItems}>
            Criadas
          </Text>
          <Text style={styles.textStatusValue}>{todoList.length}</Text>
        </View>
        <View style={styles.statusView}>
          <Text style={styles.textFinishedItems}>
            Concluídas
          </Text>
          <Text style={styles.textStatusValue}>{finishCount}</Text>
        </View>
      </View>


      <FlatList
        data={todoList}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <TodoItem
            handleFinishedCount={handleFinishCount}
            key={item}
            name={item}
            onRemove={() => handleTodoRemove(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <View style={styles.formEmpty}>
            <Image style={styles.emptyImage} source={require('../../../assets/empty-list.png')} />
            <Text style={styles.listEmptyTextBold}>
              Você ainda não tem tarefas cadastradas
            </Text>
            <Text style={styles.listEmptyText}>
              Crie tarefas e organize seus itens a fazer
            </Text>
          </View>
        )}
      />
    </View >
  )
}