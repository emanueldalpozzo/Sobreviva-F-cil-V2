import { Link } from "expo-router";
import { View } from "react-native";
import { Text } from "react-native";

export default function Financas(){
    return(
        <View>
            <Text>Texto</Text>
            <Link href="/nova-transacao">Nova Transação</Link>
        </View>
    )
}