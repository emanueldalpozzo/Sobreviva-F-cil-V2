import { Tabs } from "expo-router";

export default function TabsLayout() {
    return(
        <Tabs>
            <Tabs.Screen name="index" options={{title: 'Início'}} />
            <Tabs.Screen name="tarefas" options={{title:'Tarefas'}} />
            <Tabs.Screen name="financas" options={{title:'Finanças'}} /> 
        </Tabs>
    )
}