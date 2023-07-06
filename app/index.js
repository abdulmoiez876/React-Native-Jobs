import { useState } from "react";
import { View, Text, ScrollView, SafeAreaView } from "react-native";
import { Stack, useRouter } from "expo-router";

import { COLORS, SIZES, icons, images } from "../constants";

// components
import { Welcome, ScreenHeaderBtn, PopularJobs, NearByJobs } from "../components";

export default function index() {
	const router = useRouter();

	return (
		<SafeAreaView style={{
			flex: 1,
			backgroundColor: COLORS.lightWhite
		}}
		>
			<Stack.Screen
				options={{
					headerStyle: {
						backgroundColor: COLORS.lightWhite
					},
					headerShadowVisible: false,
					headerLeft: () => {
						return (
							<ScreenHeaderBtn
								iconUrl={icons.menu}
								dimension="60%"
							/>
						)
					},
					headerRight: () => {
						return (
							<ScreenHeaderBtn
								iconUrl={icons.profile}
								dimension="100%"
							/>
						)
					},
					headerTitle: ''
				}}
			/>
			<ScrollView showsVerticalScrollIndicator={false}>
				<View
					style={{
						flex: 1,
						padding: SIZES.medium,
					}}
				>
					<Welcome />
					<PopularJobs />
					<NearByJobs />
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}
