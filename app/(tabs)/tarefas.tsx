import { Link } from "expo-router";
import { View } from "react-native";
import { Text } from "react-native";

export default function Tarefas(){
    return(
        <View>
            <Text>texto</Text>
            <Link href="/nova-tarefa">Nova Tarefa</Link>
        </View>
    )
}