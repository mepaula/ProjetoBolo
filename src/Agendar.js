import { View, Text, TextInput, TouchableOpacity } from "react-native"

export default function Agendar()
{
    return(
        <View>
        <Text>Faça o seu peddido aqui!...</Text>
        <Text>Massa do seu bolo:</Text>
        <TextInput 
            placeholder='Massa Bolo' 
        />
        <Text>Recheio do seu bolo:</Text>
        <TextInput 
            placeholder='Recheio Bolo' 
        />
        <Text>Acompanhamento</Text>
        <TextInput 
            placeholder='Acompanhamento' 
        />
        <Text>Decoração do bolo:</Text>
        <TextInput 
            placeholder='Decoracao Bolo' 
        />
        <TouchableOpacity>
          <Text>Feto</Text>
        </TouchableOpacity>
        </View>
    );
};