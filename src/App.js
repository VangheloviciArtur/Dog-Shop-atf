import React, { useState, Fragment } from 'react'
import AddDogForm from './forms/AddDogForm'
import EditDogForm from './forms/EditDogForm'
import DogTable from './tables/DogTable'

const App = () => {
	const dogsData = [
		{ id: 1, breed: 'Akita', nick: 'As', price: "100", url: "https://www.dogtime.com/assets/uploads/2011/01/file_22906_akita-300x189.jpg" },
		{ id: 2, breed: 'Alaskan', nick: 'Bobo', price: "200", url: "https://www.dogtime.com/assets/uploads/2020/02/akita-pit-mixed-dog-breed-pictures-COVER-650x368.jpg"},
		{ id: 3, breed: 'Terrier', nick: 'Mimi', price: "300", url: "https://www.dogtime.com/assets/uploads/2017/11/alaskan-klee-kai-breed-pictures-cover-650x368.jpg"},
		{ id: 4, breed: 'Terrier', nick: 'Mopop', price: "500", url: "https://www.dogtime.com/assets/uploads/2011/01/file_23006_american-foxhound-300x189.jpg" },
		{ id: 5, breed: 'Afador', nick: 'Lolo', price: "200", url: "https://www.dogtime.com/assets/uploads/2019/09/auggie-mixed-dog-breed-pictures-cover-650x368.jpg" },
		{ id: 6, breed: 'Basset', nick: 'Toko', price: "300", url: "https://www.dogtime.com/assets/uploads/2011/01/file_23136_bichon-frise-300x189.jpg" },
	]

	const initialFormState = { id: null, breed: '', nick: '', price: '', url: '' }

	// Setting state
	const [ dogs, setDogs ] = useState(dogsData)
	const [ currentDog, setCurrentDog ] = useState(initialFormState)
	const [ editing, setEditing ] = useState(false)

	// CRUD operations
	const addDog = dog => {
		dog.id = dogs.length + 1
		setDogs([ ...dogs, dog ])
	}

	const deleteDog = id => {
		setEditing(false)
		setDogs(dogs.filter(dog => dog.id !== id))
	}

	const updateDog = (id, updatedDog) => {
		setEditing(false)
		setDogs(dogs.map(dog => (dog.id === id ? updatedDog : dog)))
	}

	const editRow = dog => {
		setEditing(true)
		setCurrentDog({ id: dog.id, breed: dog.breed, nick: dog.nick, price: dog.price, url: dog.url })
	}

	return (
		<div className="container">
			<h1>Dog Shop</h1>
			<div>
				<div className="flex-large">
					{editing ? (
						<Fragment>
							<h2>Edit</h2>
							<EditDogForm
								editing={editing}
								setEditing={setEditing}
								currentDog={currentDog}
								updateDog={updateDog}
							/>
						</Fragment>
					) : (
						<Fragment>
							<h2>Add</h2>
							<AddDogForm addDog={addDog} />
						</Fragment>
					)}
				</div>
				<div className="flex-large">
					<h2>View</h2>
					<DogTable dogs={dogs} editRow={editRow} deleteDog={deleteDog} />
				</div>
			</div>
		</div>
	)
}

export default App