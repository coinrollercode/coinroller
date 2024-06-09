'use client'

import { useState } from 'react'

import { api } from 'shared/lib/trpc/client'

export function CreatePost() {
    const [name, setName] = useState('')
    const utils = api.useUtils()
    const createPost = api.post.create.useMutation({
        onSuccess: async () => {
            await utils.post.getLatest.invalidate()
            setName('')
        },
    })

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault()
                createPost.mutate({ name })
            }}
            className="flex flex-col gap-2"
        >
            <input
                type="text"
                placeholder="Title"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-full px-4 py-2 text-black"
            />
            <button
                type="submit"
                className="rounded-full bg-white/10 px-10 py-3 font-semibold transition hover:bg-white/20"
                disabled={createPost.isPending}
            >
                {createPost.isPending ? 'Submitting...' : 'Submit'}
            </button>
        </form>
    )
}