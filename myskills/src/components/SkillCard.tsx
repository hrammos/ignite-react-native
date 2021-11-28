import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  TouchableOpacityProps,
} from 'react-native';

interface SkillProps extends TouchableOpacityProps {
  skill: string;
}

export function SkillCard({ skill, ...rest }: SkillProps) {
  return (
    <TouchableOpacity style={styles.buttonSkill} {...rest}>
      <Text style={styles.textSkill}>{skill}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonSkill: {
    backgroundColor: '#1f1e25',
    borderRadius: 50,
    padding: 15,
    alignItems: 'center',
    marginVertical: 10,
  },
  textSkill: {
    backgroundColor: '#1f1e25',
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
});
