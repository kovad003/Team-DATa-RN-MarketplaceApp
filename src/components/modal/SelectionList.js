import React from 'react';
import { FlatList, Modal, Text } from 'react-native';
import SelectionItem from './SelectionItem';

function SelectionList(props) {
    return (
        <Modal visible={props.visibility} animationType="slide">
            <Text>This is a modal view</Text>
            {/* <FlatList
            keyExtractor={props} 
            data={props.data}
            renderItem={props.itemData}
            /> */}

        </Modal>
    );
}

export default SelectionList;