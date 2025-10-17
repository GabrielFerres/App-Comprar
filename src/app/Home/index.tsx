import { View, Image, TouchableOpacity, Text, FlatList } from "react-native";
import {styles} from "./styles";

import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Filter } from "@/components/Filter";
import { Item } from "@/components/Item";

import { FilterStatus } from "@/types/FilterStatus";

const FILTER_STATUS: FilterStatus[] = [
  FilterStatus.DONE,
  FilterStatus.PENDING
]
const ITEMS = [
  {
    id: 1,
    status: FilterStatus.DONE,
    description: "Arroz"},
  {
    id: 2,
    status: FilterStatus.DONE,
    description: "Feijão"},
  {
    id: 3,
    status: FilterStatus.PENDING,
    description: "Batata"},
  {
    id: 4,
    status: FilterStatus.PENDING,
    description: "Leite"},
  {
    id: 5,
    status: FilterStatus.PENDING,
    description: "Ovo"},
  {
    id: 6,
    status: FilterStatus.PENDING,
    description: "Café"},
  {
    id: 7,
    status: FilterStatus.PENDING,
    description: "Açucar"}    
]

export function Home(){
  return (
    <View style={styles.container}>
     <Image source={require("@/assets/logo.png")} style={styles.logo}/>
     <View style={styles.form}>
        <Input placeholder="O que você precisa comprar?"/>
        <Button title="Comprar"/>
     </View>
     <View style={styles.content}>
      <View style={styles.header}>
        {FILTER_STATUS.map((status) => (
          <Filter key={status} status={status} isActive/>
        ))}

        <TouchableOpacity style={styles.clearButton}>
          <Text style={styles.clearText}>Limpar</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={ITEMS}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => (
          <Item
            data={item}
            onStatus={() => console.log("mudar o status")}
            onRemove={() => console.log("remover")}
          />
        )}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={()=> <View style={styles.separator}/>}
        contentContainerStyle={styles.listContent}
        ListEmptyComponent={() => <Text style={styles.empty}>Nenhum item aqui.</Text>}
      />
     </View>
    </View>
  )
}
